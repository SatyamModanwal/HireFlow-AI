import "./Testimonials.css";

function Testimonials() {

    const reviews = [

        {
            name: "Rahul Sharma",
            role: "Software Engineer",
            review: "HireFlow AI helped me crack my first interview. The AI interview practice was amazing."
        },

        {
            name: "Priya Singh",
            role: "Frontend Developer",
            review: "Resume Analyzer improved my resume and I received interview calls within a week."
        },

        {
            name: "Aman Kumar",
            role: "MERN Developer",
            review: "Job Tracker kept all my applications organized. Highly recommended."
        }

    ];

    return (

        <section className="testimonials">

            <h2>What Students Say</h2>

            <div className="testimonial-container">

                {
                    reviews.map((item,index)=>(

                        <div className="testimonial-card" key={index}>

                            <h3>{item.name}</h3>

                            <h4>{item.role}</h4>

                            <p>"{item.review}"</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default Testimonials;