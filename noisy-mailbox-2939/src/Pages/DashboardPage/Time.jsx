import { Box } from "@chakra-ui/react";
import DashboardFilter from "../../Components/Dashboard Components/Filter";
import DashboardNav from "./DashboardNav";

export default function Time() {

    return (
        <Box>
        <DashboardNav  />
        <DashboardFilter />
        </Box>
    )
}