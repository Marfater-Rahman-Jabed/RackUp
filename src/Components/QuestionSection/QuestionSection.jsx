import { Fade } from "react-awesome-reveal";

const QuestionSection = () => {
    return (
        <div className="bg-base-300 py-24">
            <div className="mb-12">
                <h1 className="lg:text-5xl text-4xl font-bold  text-center mb-4">Have Questions? Look Here.</h1>
                <p className=" text-center text-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta</p>
            </div>
            <div className="lg:mx-48 md:mx-20 mx-4">
                <Fade direction="up" delay={500}>
                    <div className="collapse   items-center bg-base-200  border-none rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-bold  ">
                            <h1>Do you have a free trial?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="text-justify text-slate-500">Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at odio velna congue integer vitae auctor eros dolor luctus odio placerat massa magna <br />

                                Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio placerat magna cursus</p>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="collapse collapse-plus  items-center bg-base-200  border-none rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-bold  ">
                            <h1>How can I update or cancel my personal information?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="text-justify text-slate-500">Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus</p>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="collapse collapse-plus  items-center bg-base-200  border-none rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-bold  ">
                            <h1>How do I download videos from online viewing?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="text-justify text-slate-500">Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio placerat magna cursus <br />

                                Vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor
                                Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.Tempor sapien gravida donec enim ipsum blandit magna at purus pretium ligula rutrum luctus gravida donec porta justo integer
                                Justo odio integer a velna lectus aenean magna and mauris lectus pretium ligula rutrum luctus risus ac risus auctor gravida donec congue tempor gravida donec enim ipsum porta justo integer</p>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="collapse collapse-plus  items-center bg-base-200  border-none rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-bold  ">
                            <h1>Why do you require Bluetooth to be on?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="text-justify text-slate-500">Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at odio velna congue integer vitae auctor eros dolor luctus odio placerat</p>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="collapse collapse-plus  items-center bg-base-200  border-none rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-bold  ">
                            <h1>Will there be a NextApp Android app?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="text-justify text-slate-500">Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor <br />

                                Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio</p>
                        </div>
                    </div>
                    <hr />


                </Fade>



            </div>
        </div>
    );
};

export default QuestionSection;