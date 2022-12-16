import Image from 'next/image';

type Props = {
  socialMedia: any;
};

const SocialMedia = ({ socialMedia }: Props) => {
  const { name, url } = socialMedia;

  return (
    <a
      href={url}
      style={{
        borderRadius: '10px',
        width: '36px',
        height: '36px',
        backgroundColor: 'white',
        display: 'grid',
        placeItems: 'center',
        padding: 0,
      }}
    >
      <Image
        src={`/social-media/${name}.svg`}
        alt={`Guido Martinez ${name}`}
        width={28}
        height={28}
      />
    </a>
  );
};

export default SocialMedia;
