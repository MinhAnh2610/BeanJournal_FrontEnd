import { Image } from "@nextui-org/react";

const Testemonials = () => {
  const testimonials = [
    {
      user: "John Doe",
      company: "Therapist",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1712649253/samples/people/kitchen-bar.jpg",
      text: "BeanJournal has been a game-changer for me! I love how easy it is to organize my thoughts and attach photos to my entries. The mood tracking feature really helps me reflect on my emotional well-being. Highly recommended!",
    },
    {
      user: "Jane Smith",
      company: "Software Developer",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1712649257/samples/bike.jpg",
      text: "The simplicity and elegance of BeanJournal make it a joy to use. It has become my go-to tool for capturing daily reflections and staying mindful. The tags feature makes it super easy to find past entries!",
    },
    {
      user: "David Johnson",
      company: "College Student",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1712649255/samples/people/smiling-man.jpg",
      text: "I’ve tried a lot of diary apps, but BeanJournal stands out with its seamless experience. The auto-save function is a lifesaver, and I love being able to customize my entries with media attachments. Great job!",
    },
    {
      user: "Ronee Brown",
      company: "A Young Person",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1712649257/samples/people/boy-snow-hoodie.jpg",
      text: "BeanJournal makes journaling fun and efficient! I appreciate the ability to attach photos and categorize entries with tags. It's the perfect blend of simple and powerful for daily reflections.",
    },
    {
      user: "Michael Wilson",
      company: "Wellness Coach",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1712649258/samples/people/jazz.jpg",
      text: "What I love most about BeanJournal is the clean, intuitive interface. I can create entries, add tags, and track my moods all in one place. It’s helped me stay on top of my personal growth journey.",
    },
    {
      user: "Emily Davis",
      company: "Photographer",
      image:
        "https://res.cloudinary.com/dp34so8og/image/upload/v1725983444/cld-sample.jpg",
      text: "BeanJournal has helped me stay consistent with journaling. The mood tracking and easy-to-use media attachments make it a well-rounded platform for both reflection and creativity. Can’t imagine my routine without it now!",
    },
  ];
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="rounded-md p-6 text-md border border-colour-indigo font-thin shadow-md shadow-colour-indigo">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <Image
                  isBlurred
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testemonials;
