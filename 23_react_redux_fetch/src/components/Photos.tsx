/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataState, setCurrentPagePhotos } from "../reducer/reducers";

const Photos: React.FC = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state: { data: DataState }) => state.data.photos);
  const currentPage = useSelector(
    (state: { data: DataState }) => state.data.currentPagePhotos
  );
  const photosPerPage = useSelector(
    (state: { data: DataState }) => state.data.photosPerPage
  );

  // если на странице отображается по 10 фото и мы находимся на
  // 51 странице, то indexOfLastElement 50. indexOfFirstElement 40
  const indexOfLastElement = currentPage * photosPerPage;
  const indexOfFirstElement = indexOfLastElement - photosPerPage;
  
  // из массива всех фото, полученных из глобального состояния
  // сохраняем только фото, отображаемые на той одной странице фото,
  // на которой мы находимся
  const currentPhotos = photos.slice(indexOfFirstElement, indexOfLastElement);

  const previousPage = () => {
    dispatch(setCurrentPagePhotos(currentPage - 1));
  };

  const nextPage = () => {
    dispatch(setCurrentPagePhotos(currentPage + 1));
  };

  return (
    <>
      <h2>Photos</h2>
      <ul>
        {currentPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt="Image" />
          </li>
        ))}
      </ul>
      <button disabled={currentPage === 1} onClick={previousPage}>
        Previous page
      </button>
      <button disabled={indexOfLastElement >= photos.length} onClick={nextPage}>
        Next Page
      </button>
    </>
  );
};

export default Photos;
