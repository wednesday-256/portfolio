import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full flex mx-auto">
      <div className="h-fit my-auto  mx-auto scale-50 sm:scale-90  loading_box p-10  w-fit ">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1117 982"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M616.499 977.5C400 771 354.5 860.5 211.5 847.5C68.5001 834.5 265.5 734.512 74.5002 652C-116.5 569.488 141.912 543 211.5 627.5M616.499 977.5C455.5 699 343 753 211.5 627.5M616.499 977.5C499.5 749.5 435.999 718.5 445.499 445.5M616.499 977.5C600.5 544.5 780.562 596.5 816.499 445.5M616.499 977.5C776 559 852.502 665.477 989.001 627.5M616.499 977.5C908.001 652 1087 956.5 1046 847.5C1005 738.5 1251 613 989.001 627.5M211.5 627.5C92.5 483 40.5 159 130 300.5C219.5 442 285.999 277.5 445.499 445.5M445.499 445.5C508.999 269.5 566 422.5 616.499 57.9999C639.87 -110.684 781 149 816.499 445.5M816.499 445.5C1008.5 409.5 1049.5 128 1087 300.5C1124.5 473 989.001 627.5 989.001 627.5"
            stroke="#FCD7AD"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeIn",
              repeatType: "reverse",
              repeatDelay: 0.17,
            }}
          />
        </svg>
        <p className="font-serif uppercase text-2xl load-text  text-center text-Hcolor mt-6">
          ☄️Loading Assets
        </p>
      </div>
    </div>
  );
};

export default Loading;
