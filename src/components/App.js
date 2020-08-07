import React, { useState, useEffect } from "react";
import AppBody from "./AppBody"
// import { useGlitch } from '../client/useClient'
import { useUser } from '../client/Client'
import { Box, Grommet, ResponsiveContext } from "grommet";

// Custom components imports
import DesktopSideBar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";
import TopMenu from "./TopMenu";

// Contexts imports
import { UserContext } from "../contexts/UserContext"
import { GhostContext } from "../contexts/GhostContext"
import { ChoicesContext } from "../contexts/ChoicesContext"

// useQuery
import { useQuery } from "react-query"
import { fetchRepo } from "../queries/queries"

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      // http://paletton.com/#uid=70v0t0kwE++r0++rI++nE2Ynx3b
      colorPrimary0: "#FF7600" /* Main Primary color */,
      colorPrimary1: "#FF8B28",
      colorPrimary2: "#FF8822",
      colorPrimary3: "#180E06",
      colorPrimary4: "#190F07",

      colorSecondary1_0: "#FFAA00" /* Main Secondary color (1) */,
      colorSecondary1_1: "#FFB728",
      colorSecondary1_2: "#FFB522",
      colorSecondary1_3: "#181206",
      colorSecondary1_4: "#191307",

      colorSecondary2_0: "#1A5FFF" /* Main Secondary color (2) */,
      colorSecondary2_1: "#3E79FF",
      colorSecondary2_2: "#3975FF",
      colorSecondary2_3: "#050810",
      colorSecondary2_4: "#060911",

      colorComplement0: "#02F4FF" /* Main Complement color */,
      colorComplement1: "#29F6FF",
      colorComplement2: "#24F5FF",
      colorComplement3: "#040E0E",
      colorComplement4: "#040F0F",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = () => {
  // console.log(useQuery)

  // const { isLoading, isError, data } = useQuery("repoData", fetchRepo);

  // if (isLoading) console.log('wesh load')
  // if (isError) console.log('wesh error')
  // if (data) console.log(data)

  const [currentUser, setCurrentUser] = useState(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const handleSideBar = () => setShowSidebar(!showSidebar);

  // const [{ data, loading, error }] = useGlitch(
  //   '/auth/me'
  // )

  const { user, loading, error } = useUser()

  const [ghostMood, setGhostMood] = useState('excited')
  // sad, shocked, happy, blissful, lovestruck, excited, ko

  const [choices, setChoices] = useState({
    intro: false
  })

  useEffect(() => {
    if (user) setCurrentUser(user)
  }, [user])
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <GhostContext.Provider value={{ghostMood, setGhostMood}}>
    <ChoicesContext.Provider value={{choices, setChoices}}>
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <TopMenu onHandleSideBar={handleSideBar} />
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <AppBody />
              </Box>
              {!showSidebar || size !== "small" ? (
                <DesktopSideBar showSidebar={showSidebar} />
              ) : (
                <MobileSideBar onHandleSideBar={handleSideBar} />
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
    </ChoicesContext.Provider>
    </GhostContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
