import "./WhyChooseUs.css";
function WhyChooseUs(){
    const features=[
        {
            icon:"🤖",
            title:"AI Mock Interview",
            description:"Practice with AI-generated interview question and improve your confidence."

        },
        {
            icon:"📄",
            title:"Resume Analysis",
            description:"Upload your resume and get personalized improvement suggestions."
        },
           {
            icon: "📊",
            title: "Skill Analytics",
            description: "Track your learning progress with detailed analytics."
        },

        {
            icon: "💼",
            title: "Job Tracker",
            description: "Manage all your job applications from one dashboard."
        }
    ];
  return (

        <section className="choose">

            <h2>Why Choose HireFlow AI?</h2>

            <p className="choose-subtitle">
                Everything you need to prepare for your dream job in one platform.
            </p>

            <div className="choose-container">

                {
                    features.map((item, index) => (

                        <div className="choose-card" key={index}>

                            <div className="icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}
export default WhyChooseUs;