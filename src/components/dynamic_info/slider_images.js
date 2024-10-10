import hands1 from '/images/image1-hands.jpeg';
import underHat from '/images/under-hat.jpeg';
import hands2 from '/images/image2-hands.jpeg';
import handsUp from '/images/hands-up.jpg';
import child from '/images/bg2.avif';
const slider_image_list = [
    {
        "id": 1,
        "image": hands1,
        "alt": "First slide image",
        'btn_text':'slider1',
    },
    {
        "id": 2,
        "image": underHat,
        "alt": "Second slide image",
        'btn_text':'slider2',
    },
    {
        "id": 3,
        "image": hands2,
        "alt": "Third slide image",
        'btn_text':'slider3',
    },
    {
        "id": 4,
        "image": handsUp,
        "alt": "Fourth slide image",
        'btn_text':'slider4',
    },

    {
        'id': 5,
        'image': child,
        'alt': 'child image',
        'text':'hello world',
        'btn_text':'slider5',
    },
];
export default slider_image_list;