import Image from "next/image";
import './Photo.scss'
const Photo = ({ photo }) => {
  return (
    <div className={photo.className}>
      <Image
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
      />
      <p className="photo__text">{photo.name}</p>
    </div>
  );
};

export default Photo
