import React, { useState } from 'react';
import Layout from '../../Layout';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/tape.css';
import TapeSplider from './components/TapeSplider';
import decor from './../../images/dekor.png';
import yoga from './../../images/yoga.jpeg'; // Стандартное фото
import Target from './Target';

const Tape = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [targetsByDate, setTargetsByDate] = useState({});
  const [imagesByDate, setImagesByDate] = useState({});

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImagesByDate({
          ...imagesByDate,
          [date.toDateString()]: imageUrl,
        });
        setSelectedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (event, id) => {
    const updatedTargets = targetsByDate[date.toDateString()].map((target) => {
      if (target.id === id) {
        return { ...target, text: event.target.value };
      }
      return target;
    });
    setTargetsByDate({
      ...targetsByDate,
      [date.toDateString()]: updatedTargets,
    });
  };

  const handleTextClick = (id) => {
    const updatedTargets = targetsByDate[date.toDateString()].map((target) => {
      if (target.id === id) {
        return { ...target, isVisible: false };
      }
      return target;
    });
    setTargetsByDate({
      ...targetsByDate,
      [date.toDateString()]: updatedTargets,
    });
  };

  const addTarget = () => {
    const newId =
      targetsByDate[date.toDateString()] && targetsByDate[date.toDateString()].length > 0
        ? Math.max(...targetsByDate[date.toDateString()].map((target) => target.id)) + 1
        : 1;
    const newTarget = { id: newId, text: '', isVisible: true };
    const updatedTargets = targetsByDate[date.toDateString()]
      ? [...targetsByDate[date.toDateString()], newTarget]
      : [newTarget];
    setTargetsByDate({
      ...targetsByDate,
      [date.toDateString()]: updatedTargets,
    });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedImage(imagesByDate[newDate.toDateString()] || yoga);
  };

  return (
    <Layout>
      <div className="tape_block">
        <div className="container">
          <div className="tape_content">
            <h2>Календарь</h2>
            <div className="calendar_wrapper">
              <Calendar onChange={handleDateChange} value={date} />
            </div>
            <div className="day_targets">
              {targetsByDate[date.toDateString()] &&
                targetsByDate[date.toDateString()].map((target) => (
                  <Target
                    key={target.id}
                    id={target.id}
                    initialText={target.text}
                    onTextChange={handleTextChange}
                    onTextClick={handleTextClick}
                  />
                ))}
            </div>
            <button className="common_button" onClick={addTarget}>
              Добавить цель
            </button>
          </div>

          <div className="splider_block">
            <TapeSplider selectedImage={selectedImage} />
            <input
              type="file"
              id="imageInput"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              accept="image/*"
            />
            <label htmlFor="imageInput" className="common_button">
              Добавить фото
            </label>
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default Tape;
