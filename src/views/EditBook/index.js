import React, { useState, useContext, useEffect } from 'react';

import Alert from '../../components/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { paramCase } from 'param-case';

import SectionHeader from '../../components/SectionHeader';
import BookContext from '../../context/books/booksContext';

const EditBook = ({ history }) => {
  const booksContext = useContext(BookContext);
  const { activeBook, getBookbyId, updateBooks } = booksContext;
  // WHEN REFRESH ASSIGN ACTIVE BOOK FROM ID PARAMS
  const bookId = new URLSearchParams(document.location.search).get('id');

  useEffect(() => {
    getBookbyId(bookId);
  }, [activeBook, bookId]);

  const [alert, setAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: activeBook.name,
      author: activeBook.author,
      publisher: activeBook.publisher,
      language: activeBook.language,
      page: activeBook.page,
      date: activeBook.date,
      notes: activeBook.notes,
      isRead: false,
      isReading: false,
      cover: activeBook.cover,
    },
    enableReinitialize: true,
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
      updateBooks({ _id: bookId, ...values, seoUrl: paramCase(values.name) });
      setAlert(true);
    },
  });

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        history.push(`/book/${paramCase(formik.values.name)}`);
      }, 2000);
    }
  }, [alert, history, formik.values.name, activeBook]);

  return (
    <>
      <SectionHeader header="Edit Your Book" />
      <Alert focus message="Your Book Saved!" show={alert} />
      {!alert ? (
        <form onSubmit={formik.handleSubmit} className="edit-form">
          <div className="form-item">
            <label className="name">Book Name</label>
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
              <div className="form-val-msg">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-item">
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
              <div className="form-val-msg">{formik.errors.author}</div>
            ) : null}
          </div>
          <div className="form-item">
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
              <div className="form-val-msg">{formik.errors.publisher}</div>
            ) : null}
          </div>
          <div className="form-item">
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
              <div className="form-val-msg">{formik.errors.language}</div>
            ) : null}
          </div>
          <div className="form-item">
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
              <div className="form-val-msg">{formik.errors.page}</div>
            ) : null}
          </div>
          <div className="form-item">
            <label htmlFor="date">When did you buy the book?</label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            <p>{formik.values.date}</p>
            {formik.touched.page && formik.errors.page ? (
              <div className="form-val-msg">{formik.errors.page}</div>
            ) : null}
          </div>
          <div className="form-item">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              cols="50"
              placeholder="Notes"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.note}
            />
            {formik.touched.notes && formik.errors.notes ? (
              <div className="form-val-msg">{formik.errors.notes}</div>
            ) : null}
          </div>
          <div className="options-wrapper">
            <div className="form-item">
              <label htmlFor="isRead">Have you read this book?</label>
              <input
                id="isRead"
                name="isRead"
                type="checkbox"
                placeholder="The Metamorphosis"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isRead}
              />{' '}
              {formik.values.isRead ? <span>Yes</span> : <span>No</span>}
              {formik.touched.isRead && formik.errors.isRead ? (
                <div className="form-val-msg">{formik.errors.isRead}</div>
              ) : null}
            </div>
            <div className="form-item">
              <label htmlFor="isReading">Are you reading now?</label>
              <input
                checked={formik.values.isReading}
                id="isReading"
                name="isReading"
                type="checkbox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isReading}
              />{' '}
              {formik.values.isReading ? <span>Yes</span> : <span>No</span>}
              {formik.touched.isReading && formik.errors.isRead ? (
                <div className="form-val-msg">{formik.errors.isReading}</div>
              ) : null}
            </div>
          </div>
          <div className="image-wrapper">
            <div className="image-preview">
              <img src={formik.values.cover} alt="" />
            </div>
            <div className="form-item image-preview-url">
              <label htmlFor="cover">Cover Image(URL)</label>
              <input
                id="cover"
                name="cover"
                type="text"
                placeholder="Cover Image URL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cover}
              />
            </div>
          </div>
          {formik.touched.cover && formik.errors.cover ? (
            <div>{formik.errors.cover}</div>
          ) : null}
          <button className="Book-Button fw" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <>
          <h2 style={{ textAlign: 'center' }}>Redirecting your book page</h2>
        </>
      )}
    </>
  );
};

export default EditBook;
