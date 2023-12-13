import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        const message = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message
        }
        fetch("https://personal-portfolio-server-eta.vercel.app/message", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(message),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message sent successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    reset()
                } else {
                    console.log(data)
                }
            });

    }
    return (
        <section className="max-w-screen-xl mx-auto min-h-screen pb-10 flex flex-col items-center justify-center gap-8 lg:gap-20">
            <h1 className="font-bold downMove text-center text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-white">Contact</span> With <span className="text-white">Me</span></h1>
            <section className="w-full px-2 md:px-10 lg:px-2 text-white  mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12">
            
                <div className=" p-8 flex w-full mx-auto md:w-2/3 lg:w-1/2 flex-col items-start gap-2 rounded-lg" style={{boxShadow: "1px 1px 10px 0px #FF6AC2"}}>
                    <h1 className="font-bold mb-4 text-center lg:text-2xl text-xl">Get in Touch:</h1>
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#FF6AC2] text-[#FF6AC2]"><FaPhoneAlt /></div>
                        <div>
                            <p className="font-bold text-lg">Contact:</p>
                            <p className="font-bold text-gray-400">01903106521</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#FF6AC2] text-[#FF6AC2]"><MdEmail /></div>
                        <div>
                            <p className="font-bold text-lg">Email:</p>
                            <p className="font-bold text-gray-400">sajibhasan9811@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#FF6AC2] text-[#FF6AC2]"><FaMapMarkerAlt /></div>
                        <div>
                            <p className="font-bold text-lg">Location:</p>
                            <p className="font-bold text-gray-400">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className=" rounded-lg w-full mx-auto lg:w-1/2 py-4 px-2 md:px-4" style={{ boxShadow: "1px 1px 10px 0px #FF6AC2" }}>
                    <h1 className="font-bold text-2xl mb-4 text-center md:text-3xl">Contact Form</h1>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold">Your Name: *</label>
                                <input {...register('name')}  type="text" placeholder="Enter your name" required className="input input-bordered input-secondary " />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold">Contact Number: *</label>
                                <input {...register('phone')}  type="number" placeholder="Enter your phone number" required className="input input-bordered input-secondary" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Your Email: *</label>
                            <input {...register('email')}  type="email" placeholder="Enter your Email" required className="input input-bordered input-secondary" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Your Message: *</label>
                            <textarea {...register('message')} className="textarea textarea-bordered" placeholder="Your message"></textarea>
                        </div>
                        <button className="p-2 px-6 mt-2 mx-auto flex items-center gap-1 rounded-full bg-[#FF6AC2] text-white transition-shadow hover:shadow-none font-semibold "style={{boxShadow:"0px 0px 5px 0px #FF6AC2"}} >Send <BsFillSendFill /></button>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default Contact;