import AnimationWrapper from '@/components/AnimationWrapper'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <h1 className="heading-xl mb-8">Contact Us</h1>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <p className="body-lg text-primary/80 max-w-3xl mx-auto">
                Whether you have a question, want to collaborate, or simply want to connect with Just Cream —
                we'd love to hear from you. Get in touch with our team and let's create something extraordinary together.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimationWrapper>
            <ContactForm />
          </AnimationWrapper>
        </div>
      </section>

      {/* Information */}
      <section className="bg-secondary py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimationWrapper>
            <h2 className="heading-lg mb-8">Get in Touch</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 mb-8">
              Fill out the form above and our team will get back to you shortly with everything you need
              to elevate your luxury body care experience.
            </p>
            <p className="body-md text-primary/60">
              Customer service available Monday–Friday
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
