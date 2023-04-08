import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiTicon from "react-icons/ti";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Account",
        path: "/account",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Cards",
        path: "/cards",
        icon: <AiIcons.AiOutlineCreditCard />,
        cName: "nav-text"
    },
    {
        title: "Transaction",
        path: "/transaction",
        icon: <AiIcons.AiOutlineTransaction />,
        cName: "nav-text"
    },
    {
        title: "Payment",
        path: "/payment",
        icon: <TiTicon.TiTickOutline />,
        cName: "nav-text"
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: "nav-text"
    }
];
