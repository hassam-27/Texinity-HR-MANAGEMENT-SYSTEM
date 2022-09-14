import { useState,useCallback, useEffect } from "react";

import { getEmployees } from "./request";
import { getInternees } from "./request";
import { getPresents } from "./request";

const useDashboard = () => {
    const [emp, setEmp] = useState(0)
    const [intern, setIntern] = useState(0);
    const [preEmp, setPreEmp] = useState(0);
    const [preInt, setPreInt] = useState(0);

    const getEmp = async () => {
        const fetchedEmployees = await getEmployees()
        setEmp(fetchedEmployees.count)
    }

    const getIntern = async () => {
        const fetchedInternees = await getInternees()
        setIntern(fetchedInternees.count)
    }

    const getPresent = async () => {
        const fetchedPresent = await getPresents()
        setPreEmp(fetchedPresent.emp)
        setPreInt(fetchedPresent.intern)
    }

    useEffect(() => {
        getEmp();
        getIntern();
        getPresent();

    }, [])

    return { emp, intern, preEmp, preInt }
}

export default useDashboard;