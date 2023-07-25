import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.jpg'
const FAQSPage = () => {
    return (
        <div>
            <div className="p-4 bg-base-300 ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">FAQs</span></h1>
            </div>
            <div className='lg:flex md:flex items-center justify-between lg:mx-16 md:mx-10 mx-8 mb-4'>
                <div className="flex lg:mx-20 p-10">
                    <span className='mr-6'>
                        <img src={Logo} alt="" className='w-24 h-24 rounded-md' />
                    </span>
                    <span>
                        <h1 className='text-3xl font-bold'>RackUp</h1>
                        <div className="flex ">
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                        </div>
                        <h1>4.6/5 based on 1.014 ratings</h1>
                    </span>
                </div>
                <div>
                    <button className='btn btn-primary rounded-full mx-2'><Link to='/contact'>Write A Review</Link></button>
                    <button className='btn btn-outline rounded-full mx-2'><Link to='/faqs'>Ask A Question</Link></button>
                </div>
            </div>
            <div className="bg-base-300 py-10">
                <div className="lg:mx-28 md:mx-20 mx-4 pt-20">
                    <div className="lg:flex md:flex gap-10">
                        <div className="lg:w-1/2 md:w-1/2 mb-4">
                            <h1 className="text-primary text-4xl font-semibold py-3 ">General Questions</h1>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Getting started with NextApp</h1>
                                <p className="text-slate-500 text-justify ">Congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit</p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Download NextApp for Mac</h1>
                                <p className="text-slate-500 text-justify">
                                    An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in purus ipsum primis in cubilia laoreet augue egestas
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Download NextApp for Mac</h1>
                                <p className="text-slate-500 text-justify">
                                    Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet. Laoreet auctor massa varius undo egestas mauris suscipit semper lacus sed cursus porta feugiat primis
                                </p>
                            </span>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 mb-4">
                            <h1 className="text-primary text-4xl font-semibold py-3 ">Data Sync Backup</h1>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> How do I download videos from online viewing?</h1>
                                <p className="text-slate-500 text-justify">Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas at suscipit lectus magna suscipit luctus undo blandit vitae purus</p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> What file types can be recovered with NextApp?</h1>
                                <p className="text-slate-500 text-justify">
                                    An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus sit ametn in odio. Integer congue leo metus, eu mollis lorem viverra suscipit lectus magna. Ultrice ligula magna and suscipit lectus gestas augue into cubilia luctus impedit
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> How do I download videos from online viewing?</h1>
                                <p className="text-slate-500 text-justify">
                                    Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae. Semper lacus cursus porta, feugiat primis luctus ultrice tellus neque dolor primis magna nullam
                                </p>
                            </span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="lg:mx-28 md:mx-20 mx-4 py-10">
                    <div className="lg:flex md:flex gap-10">
                        <div className="lg:w-1/2 md:w-1/2 mb-4">
                            <h1 className="text-primary text-4xl font-semibold py-3 ">Coming Soon Features</h1>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Feature Overview - Stores Filters</h1>
                                <p className="text-slate-500 text-justify">Congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit</p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> How does NextApp deliver messaging?</h1>
                                <p className="text-slate-500 text-justify">
                                    An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in purus ipsum primis in cubilia laoreet augue egestas
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Does NextApp support live streaming?</h1>
                                <p className="text-slate-500 text-justify">
                                    Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet. Laoreet auctor massa varius undo egestas mauris suscipit semper lacus sed cursus porta feugiat primis
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Do I have the access to my media files?</h1>
                                <p className="text-slate-500 text-justify">
                                    Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet. Laoreet auctor massa varius undo egestas mauris suscipit semper lacus sed cursus porta feugiat primis
                                </p>
                            </span>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 mb-4">
                            <h1 className="text-primary text-4xl font-semibold py-3 ">Pricing Questions</h1>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Do you have a free trial?</h1>
                                <p className="text-slate-500 text-justify">Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas at suscipit lectus magna suscipit luctus undo blandit vitae purus</p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> What payment methods do you accept?</h1>
                                <p className="text-slate-500 text-justify">
                                    An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus sit ametn in odio. Integer congue leo metus, eu mollis lorem viverra suscipit lectus magna. Ultrice ligula magna and suscipit lectus gestas augue into cubilia luctus impedit
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> What is included in the price?</h1>
                                <p className="text-slate-500 text-justify">
                                    Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae. Semper lacus cursus porta, feugiat primis luctus ultrice tellus neque dolor primis magna nullam
                                </p>
                            </span>
                            <span>
                                <h1 className=" text-2xl font-semibold py-3 "> Can I change my subscription at any time?</h1>
                                <p className="text-slate-500 text-justify">
                                    Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae. Semper lacus cursus porta, feugiat primis luctus ultrice tellus neque dolor primis magna nullam
                                </p>
                            </span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <h1 className="text-center py-10 text-xl">Still have a question? <Link to='/contact' ><b><u>Ask your question here</u></b></Link></h1>
            </div>


        </div>
    );
};

export default FAQSPage;