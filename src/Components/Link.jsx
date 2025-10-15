const Link = ({text,link}) => {
    return (
        <div>
            <a className="text-violet-500 cursor-pointer" href={link}>{text}</a>
        </div>
    );
};

export default Link;