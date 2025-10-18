

const UserProfile = () => {
    return (
        <section className="w-7xl mx-auto py-20 px-4 flex">
        <div className="w-5/12">
          <img src="/image/userpage/img.png" alt="" />
          <h2 className="text-4xl font-semibold my-10">Rebeca Chenford</h2>
          <h1 className="text-5xl font-bold leading-15">I’m UX/UI Designer <br /> at Microtech 👋</h1>  
          <div>
            
          </div>
        </div>

        <div className="w-7/12">
            <img src="/image/userpage/fram.png" className="rounded-xl hover:shadow-xl duration-500" />
        </div>
        </section>
    );
};

export default UserProfile;