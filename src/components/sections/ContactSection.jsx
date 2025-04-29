import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGithub, FaLinkedin, FaTwitter 
} from 'react-icons/fa';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to a backend service
    // For now, we'll just log it and reset the form
    alert('Message sent! (This is a demo)');
    reset();
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/jhapriyavart10', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/priyavart-jha-0207z/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'mailto:jhapriyavart249@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a question or want to work together? Send me a message!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition"
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition"
                    placeholder="Your message..."
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <Card className="p-6 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-light dark:text-primary-dark w-5 h-5 mr-3" />
                  <span>jhapriyavart249@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-primary-light dark:text-primary-dark w-5 h-5 mr-3" />
                  <span>IIITDM Kancheepuram, Chennai, India</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
