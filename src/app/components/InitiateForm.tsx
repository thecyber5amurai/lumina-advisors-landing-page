import { Button } from "./Button";

export default function InitiateForm() {
    return (
        <section className="bg-[#f1f2f3] p-12 flex justify-center min-h-screen">
            <div className=" shadow-xl bg-white p-10 w-250 border-t-6 border-black rounded-md mx-auto max-w-screen-2xl">
                <div className="text-center my-10">
                <h2 className="mb-5 text-2xl font-semibold text-gray-900 md:text-4xl">Initiate Dialogue</h2>
                <p className="text-base leading-6 text-gray-600">Connect with a senior partner to discuss your strategic objectives.</p>
                <p className="text-base leading-6 text-gray-600">Confidentiality is assured.</p>
                </div>
                <form action="#" className="flex flex-col gap-5 mt-8 p-4">
                        <label htmlFor="fullname" className="text-base font-bold tracking-wider uppercase">Full Name</label>
                        <input type="text" name="fullname" id="fullname" className="border-b py-5 border-gray-200 text-gray-800 focus:outline-none focus:border-black placeholder-gray-400 bg-transparent transition-colors" placeholder="Jane Doe"/>

                        <label htmlFor="email" className="text-base font-bold tracking-wider uppercase">Work email</label>
                        <input type="email" name="email" id="email" className="border-b py-6 border-gray-200 text-gray-800 focus:outline-none focus:border-black placeholder-gray-400 bg-transparent transition-colors" placeholder="janedoe@company.com"/>

                        <label htmlFor="description" className="text-base font-bold tracking-wider uppercase mt-4">How can we help?</label>
                        <textarea name="description" id="description" placeholder="Briefly describe your inquiry..."  className="border-b py-6 mb-4 border-gray-200 text-gray-800 focus:outline-none focus:border-black placeholder-gray-400 bg-transparent transition-colors" />

                        <Button label="REQUEST CONFIDENTIAL CONSULTATION" variants="primary" /> 
                </form>
            </div>
        </section>
    );
}