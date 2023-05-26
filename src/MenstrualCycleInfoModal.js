import React from 'react';
import Modal from 'react-modal';
import './MyComponent.css';

Modal.setAppElement('#root');

const MenstrualCycleInfoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Menstrual Cycle Information'
    >
        <div className='info'>
        <h2>
            Menstrual Cycle Information
        </h2>
        <p>
        The menstrual cycle is a process that occurs in a woman's body in order to prepare for pregnancy. It is controlled by an interplay of hormones and can be divided into several phases.
        </p>
     <h3>Phase 1: Menstrual phase</h3>
<p>The menstrual phase is the first phase of the menstrual cycle and typically lasts from 3 to 7 days. During this time, the uterus sheds its lining, which is made up of blood and tissue, as it prepares for a possible pregnancy. This is what causes a woman's period.</p>

<h3>Phase 2: Follicular phase</h3>
<p>The follicular phase begins on the first day of the menstrual cycle and typically lasts around 10 to 14 days. During this phase, the pituitary gland in the brain releases follicle-stimulating hormone (FSH), which stimulates the growth of follicles in the ovaries. These follicles contain immature eggs. As the follicles grow, they produce estrogen, which thickens the lining of the uterus.</p>

<h3>Phase 3: Ovulatory phase</h3>
<p>The ovulatory phase typically occurs around day 14 of the menstrual cycle. During this phase, the levels of estrogen in the body trigger a surge of luteinizing hormone (LH), which causes the dominant follicle to release a mature egg from the ovary. This is called ovulation.</p>

<h3>Phase 4: Luteal phase</h3>
<p>The luteal phase begins after ovulation and lasts around 14 days. After the egg is released, the follicle that contained it becomes the corpus luteum, which produces progesterone. This hormone helps to thicken the lining of the uterus and prepare it for a possible pregnancy. If the egg is not fertilized, the corpus luteum disintegrates and the levels of estrogen and progesterone decrease, causing the lining of the uterus to shed and starting a new menstrual cycle.</p>
<h3>Average length of a Cycle</h3>
<p>The average length of a menstrual cycle is around 28 days, but it can range from 21 to 35 days in adult women. However, cycles that are shorter or longer than this range can be normal for some women.</p>
<h3>Average length of a Period</h3>
<p>The average length of a menstrual period, which is the bleeding that occurs during the menstrual cycle, is typically around 5 days. However, periods can last from 2 to 7 days in most women, and some women may experience shorter or longer periods.</p>

<p><strong>It's important to note that menstrual cycle length and period length can vary from woman to woman and can be affected by a variety of factors such as age, genetics, hormonal imbalances, stress, and underlying medical conditions. If you have concerns about the length of your menstrual cycle or period, it's important to speak with a healthcare provider.</strong></p>
</div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default MenstrualCycleInfoModal;
