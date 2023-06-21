
const InputForm = () => {
    return (
        <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block ">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md    focus:border-primary border-gray/30 border outline-none ring-0" />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block ">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md    focus:border-primary border-gray/30 border outline-none ring-0" />
                <div className="flex justify-end text-xs ">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <button className="block w-full p-3 text-center rounded-md text-white  bg-primary active:scale-90 duration-common">Sign in</button>
        </form>
    );
};

export default InputForm;