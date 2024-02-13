import {motion} from "framer-motion";

type Props = {
    src: string;
    type: string;
    onClick: () => void;
    location: "right" | "left";
}

export const Item = (props: Props) => {
    const { src, type, onClick, location} = props

    // アニメーションのための初期位置と最終位置を定義
  const variants = {
    left: { x: 0 }, // 左岸への移動
    right: { x: 500 }, // 右岸への移動
  };

  return (
    <motion.div
      initial={location} // 初期位置
      animate={location} // アニメーション後の状態
      variants={variants} // 位置に応じた変化
      transition={{ duration: 0.5 }} // アニメーションの持続時間
    >
      <img src={src} alt={type} onClick={onClick} width="100px"/>
    </motion.div>
  )
}
