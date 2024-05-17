import {motion} from "framer-motion";

interface props {
    text: string,
    type? : "header" | "subheader",
    align? : "left" | "right" | "center"
}

export default function AnimatedText({text, type = "header", align = "center"}: props) {
    let style = "text-[46px] text-center font-medium leading-snug";
    if(type === "header") {
        style = `text-[46px] text-center font-medium leading-snug`
    }else if (type === "subheader") {
        style = `text-2xl font-medium text-[${align}] min-w-[400px] max-w-[650px]`
    }

    return (
        <div className={style}>
            {text.split(" ").map((char, i) => {
                return (
                    <motion.span
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        key={i}  // Added a key for each element
                        style={{
                            display: 'inline-block',
                            marginRight: '5px'
                        }}  // Inline block for each word with some margin for spacing
                        initial={"hidden"}
                        // animate={"visible"}
                        variants={{
                            hidden: {
                                y: 20,
                                opacity: 0
                            },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: i / 20
                                }
                            }
                        }}
                    >
                        {char}
                    </motion.span>
                )
            })}
        </div>
    )
}