import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <div className="flex flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h2 className="text-5xl md:text-7xl font-brand font-medium tracking-tight text-text-primary">
                        Have an idea?
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-brand font-medium tracking-tight text-text-secondary">
                        Let's build it.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-text-secondary font-ui max-w-lg"
                >
                    I am currently available for freelance projects and designs.
                    Reach out if you want to collaborate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="pt-8"
                >
                    <a href="mailto:madhankannan29@gmail.com" className="text-lg sm:text-2xl md:text-4xl font-brand font-medium border-b-2 border-border hover:border-primary hover:text-text-primary transition-colors pb-2 break-all sm:break-normal text-text-primary">
                        madhankannan29@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
