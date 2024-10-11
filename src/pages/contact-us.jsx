import React, { useRef, useState } from "react";
import { Footer, PageTitle } from "@/widgets/layout";
import {Button, Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import emailjs from "emailjs-com";

export function ContactUs() {
    
    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    const [WAMessage, setMessage] = useState("");
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        console.log(e.target)
        // return
        /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ 
        
        emailjs
        .sendForm("service_sfzb5hh", "template_qifvh8d", e.target, "TzuVovyyTTvNesFdV")
        .then(
            (result) => {
                console.log(result.text);
                alert('Message Sent Successfully!')
                window.location.reload()
                clearState();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    // Fungsi untuk menangani pengiriman pesan ke WhatsApp
    const sendMessageToWhatsApp = (e) => {
        e.preventDefault(); // Mencegah refresh halaman
        const phoneNumber = "6285219388567"; // Ganti dengan nomor WhatsApp tujuan, harus menggunakan kode negara
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WAMessage)}`;
        
        // Membuka URL WhatsApp di tab baru
        window.open(whatsappURL, "_blank");
    };
    
    return (
        <>
        <div className="relative flex h-96 content-center items-center justify-center pt-20 pb-2">
        <div className="absolute top-0 h-full w-full bg-[url('/img/hero.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900 to-purple-900/70 bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900/80 to-blue-800/30 bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-6 font-black text-xl md:text-3xl lg:text-4xl"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-anchor-placement="top-center"
                        >
                            Hubungi Kami <br/> untuk Solusi Digital Terbaik
                        </Typography>
                        <Typography variant="lead" color="white" className="opacity-80 text-md"
                            data-aos="fade-in"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-anchor-placement="top-center">
                            Apakah Anda memiliki pertanyaan atau ingin memulai proyek web aplikasi Anda? Kami siap membantu! Isi formulir di bawah ini atau hubungi kami langsung melalui email atau telepon. Tim kami akan segera menghubungi Anda.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>

        <section className="relative bg-white py-5">
            
            <div className="mt-0 flex flex-wrap items-center">
            {/* <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div> */}
            <div className="mx-auto mt-10 w-full md:w-7/12"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
                >
                <section className="relative bg-white py-5 md:py-20 lg:py-20">
                    <div className="container w-full mx-auto">
                        <PageTitle section="" heading="Ingin terhubung dengan kami?">
                            Lengkapi formulir ini dan kami akan menghubungi Anda kembali dalam 24 jam.
                        </PageTitle>
                        <form className="mx-auto w-full px-4 mt-12 lg:w-10/12" onSubmit={handleSubmit}>
                            <div className="mb-8 lg:flex gap-8">
                                <input type="hidden" name="to_name" value="TN Studio" />
                                <Input
                                    variant="outlined" 
                                    size="lg" 
                                    label="Nama lengkap anda" 
                                    id="from_name"
                                    name="from_name"
                                    required
                                    onChange={handleChange} />
                                <Input
                                    variant="outlined" 
                                    size="lg" 
                                    label="Alamat email anda"
                                    id="email"
                                    name="reply_to"
                                    required
                                    onChange={handleChange}  />
                            </div>
                            <Textarea 
                                variant="outlined" 
                                size="lg" 
                                label="Tuliskan pesan" rows={5} 
                                name="message"
                                id="message"
                                required
                                onChange={handleChange}

                                />
                            {/* <Checkbox
                            label={
                                <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                                >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                            /> */}
                            <Button variant="filled" color="blue" size="lg" type="submit" className="mt-8" fullWidth>
                                Kirim Pesan
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
            <div 
                className="mx-auto flex w-full justify-center md:w-5/12 lg:mt-0 border-l-4 border-gray-500 shadow-md"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
            >
                <section className="relative bg-white py-5 md:py-20 lg:py-20">
                    <div className="container w-full mx-auto">
                        <PageTitle section="" heading="Melalui Whatsapp?">
                            Hubungi kami
                        </PageTitle>
                        <form className="mx-auto w-full mt-12" onSubmit={sendMessageToWhatsApp}>
                            <Textarea
                                variant="outlined"
                                size="lg"
                                label="Pesan WhatsApp"
                                rows={8}
                                value={WAMessage}
                                required
                                onChange={(e) => setMessage(e.target.value)} // Update state ketika user mengetik
                            />
                            <Button variant="filled" color="green" size="lg" className="mt-8" fullWidth type="submit">
                                Kirim Pesan WhatsApp
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
            {/* <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div> */}
            </div>
            
        </section>
        
        <div className="bg-white">
            <Footer />
        </div>
        </>
    );
}

export default ContactUs;
