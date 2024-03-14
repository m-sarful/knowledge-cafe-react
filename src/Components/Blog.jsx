
const Blog = ({ blog }) => {
    const {name, image} = blog;
    return (
        <div>
            <img src={image} className="w-96" alt="" />
            <h2>Name : {name}</h2>
        </div>
    );
};

export default Blog;