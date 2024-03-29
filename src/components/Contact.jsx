import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailJs from '@emailjs/browser'

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { CALENDLY_URL } from '../constants';
import { useTranslation } from 'react-i18next';


const service_id = "service_lrudxci";
const template_id = "template_fw5jcii";
const public_key = "V0eb8EcKgv_OeQOug";
const my_name = 'Rohan';
const my_email = 'rohans540@gmail.com';

const initialState = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const randomAutoCompleteValue = Math.random().toString(36).substring(2, 15);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailJs.send(service_id, template_id, {
      from_name: form.name,
      to_name: my_name,
      from_email: form.email,
      to_email: my_email,
      message: form.message
    },
    public_key)
    .then(() => {
      setLoading(false);
      alert("Thank you. You will soon hear from me :)");
      setForm(initialState);
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong, please try again.")
    })
  }

  return (
    <div className='xl:,mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('getInTouch')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact')}</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('yourName')}</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t('nameQ')}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('yourEmail')}</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t('emailQ')}
                autoComplete={randomAutoCompleteValue}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('yourMessage')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t('messageQ')}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <div className='flex justify-around'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
              disabled={ !form.name || !form.email || !form.message }
            >
              {loading ? t('sending') : t('send')}
            </button>
            <span className='text-secondary hover:underline text-[12px] mt-4 cursor-pointer' onClick={() => window.open(CALENDLY_URL, '_blank')}>{t('scheduleAcall')}</span>
          </div>
        </form>

      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")