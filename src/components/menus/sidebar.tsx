
const Sidebar = () => {
    return (
        <div className={"flex flex-col w-72 bg-primary h-screen pt-14 items-center"}>
            <h1 className={"text-white tracking-widest text-xl"}>Dashboard</h1>
            <div className={"flex flex-col text-center divide-y divide-secondary w-full p-5 space-y-5"}>
                <ul className={"space-y-5"}>
                    <li><a className={"text-white tracking-wide"} href={"/admin/menus"}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                </ul>
                <ul className={"space-y-5 "}>
                    <li className={"pt-5"}><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                    <li><a className={"text-white tracking-wide"} href={""}>Menus</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar