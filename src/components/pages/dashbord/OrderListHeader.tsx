import { RiListUnordered } from "react-icons/ri";

const OrderListHeader = () => {
    return (
        <header
            className='h-16 flex items-center justify-between text-gray sticky top-0 bg-white'
        >
            <div
                className="flex items-center gap-2 text-xl font-medium text-primary"
            >
                <RiListUnordered
                    className='text-[2rem] rounded-[4px] border border-gray/30 p-1'
                />
                Order List
            </div>
            <div>
                <form>
                    <select
                        name=""
                        id=""
                        className="py-2 px-6 border border-gray/50 rounded-md outline-none"
                    >
                        <option value="" selected>By Name</option>
                        <option value="">By Email</option>
                    </select>
                </form>
            </div>
        </header>
    );
};

export default OrderListHeader;