import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SectionHeader from '../../components/SectionHeader';

const AddBook = () => {
  const [form, setForm] = useState({});

  const formik = useFormik({
    initialValues: {
      name: '',
      author: '',
      publisher: '',
      language: '',
      page: '',
      date: '',
      notes: '',
      isRead: false,
      isReading: true,
      cover: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be minimum 2 characters')
        .required('Required'),
      author: Yup.string()
        .min(2, 'Must be minimum 2 characters')
        .required('Required'),
      publisher: Yup.string()
        .min(2, 'Must be minimum 2 characters')
        .required('Required'),
      language: Yup.string()
        .min(2, 'Must be minimum 2 characters')
        .required('Required'),
      page: Yup.number('Must be numbers, mate!')
        .positive('Must be positive mate!')
        .integer()
        .min(1)
        .typeError('Must be number, hun!'),
      notes: Yup.string(),
      isRead: Yup.boolean(),
      isReading: Yup.boolean(),
      cover: Yup.string()
        .url('Must be image URL for now, Upload feature is coming later')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <SectionHeader header="Add your next book" />
      <form onSubmit={formik.handleSubmit} className="addbook-form">
        <label htmlFor="name">Book Name</label>
        <input
          autoFocus
          id="name"
          name="name"
          type="text"
          placeholder="Book Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Franz Kafka"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}

        <label htmlFor="publisher">Publisher</label>
        <input
          id="publisher"
          name="publisher"
          type="text"
          placeholder="Penguin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.publisher}
        />
        {formik.touched.publisher && formik.errors.publisher ? (
          <div>{formik.errors.publisher}</div>
        ) : null}

        <label htmlFor="language">Language</label>
        <input
          id="language"
          name="language"
          type="text"
          placeholder="English"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.language}
        />
        {formik.touched.language && formik.errors.language ? (
          <div>{formik.errors.language}</div>
        ) : null}

        <label htmlFor="page">Pages</label>
        <input
          id="page"
          name="page"
          type="text"
          placeholder="169"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.page}
        />
        {formik.touched.page && formik.errors.page ? (
          <div>{formik.errors.page}</div>
        ) : null}

        <label htmlFor="date">When did you buy the book?</label>
        <input
          id="date"
          name="date"
          type="date"
          placeholder="1987-07-10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
        />
        <p>{formik.values.date}</p>
        {formik.touched.page && formik.errors.page ? (
          <div>{formik.errors.page}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBook;

//          _id: '10006546',
//         name: 'Book Name 1',
//         author: 'Author',
//         publisher: 'Publisher',
//         language: 'English',
//         page: '224',
//         date: '',
//         notes: 'Note area',
//         isRead: false,
//         isReading: true,
//         cover:
//           'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
//         seoUrl: 'book-name-1',
