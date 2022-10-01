import { Box } from "@chakra-ui/react";
import ExpensesUI from "../../Components/Dashboard Components/Expenses/ExpensesUI";
import DashboardNav from "./DashboardNav";

export default function Expenses() {
    return (
        <Box>
            <DashboardNav />
            <ExpensesUI/>
        </Box>
    )
}