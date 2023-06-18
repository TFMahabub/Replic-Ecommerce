import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";

const CustomersTable = () => {
    return (
        <>
            <table className="w-full whitespace-nowrap text-gray">
                <thead>
                    <tr className="h-16 w-full text-lg tracking-wide sticky top-[4rem] z-[1] bg-lightGray">
                        <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-4">
                            {/* Browser */}
                            Select
                        </th>
                        <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-4">
                            {/* serial */}
                            Serial
                        </th>
                        <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-12">
                            {/* Email */}
                            Email
                        </th>
                        <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-12">
                            {/* Location */}
                            Join Date/Time
                        </th>
                        <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-20">
                            {/* Last Activity */}
                            Action
                        </th>
                        {/* <th className="text-start bg-gray-5 text-secondary-text font-semibold text-sm pl-20">
                                Last Inactivity
                            </th> */}
                    </tr>
                </thead>
                <tbody className="w-full">
                    {[...Array(15)].map((_, i) => (
                        <tr
                            key={i}
                            id="tr"
                            className="h-14 text-xs text-secondary-text bg-white hover:bg-gray/10 hover:bg-gray-100 border-b border-gray/50 last-of-type:border-b-none"
                        >
                            <td className="pl-4">
                                <div className="flex gap-2 items-center">

                                    <input type="checkbox" name="" id="tr" />
                                </div>
                            </td>
                            <td className="pl-4">
                                <div className="flex gap-2 items-center">
                                    {/* <ChromeIcon /> */}
                                    <span className=" text-sm font-normal">
                                        1
                                    </span>
                                </div>
                            </td>
                            <td className="pl-12 text-sm font-normal">
                                <span className="flex items-center gap-1">
                                    rjmahabub543@gmail.com
                                </span>
                            </td>
                            <td className="pl-12 text-sm font-normal">
                                <span className="">18-04-2023 10:02 PM</span>
                            </td>
                            <td className="pl-20 text-sm font-normal">
                                <div
                                    className="flex gap-2 items-center"
                                >
                                    <RiEditBoxLine
                                        className="text-3xl p-1 text-primary bg-primary/10 cursor-pointer hover:bg-primary/20 rounded-sm"
                                    />
                                    <RiDeleteBinLine
                                        className="text-3xl p-1 text-error bg-error/10 cursor-pointer hover:bg-error/20 rounded-sm"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomersTable;