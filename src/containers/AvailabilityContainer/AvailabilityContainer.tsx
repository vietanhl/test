import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getAvailability = async (year: any, month: any, day: any) => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.availability}/${year}/${month}/${day}`)
      .then(res => {
        response = JSON.stringify(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  await fetchData();
  return response;
};

// export const getAvailabilityByTreatment = (
//   year: any,
//   month: any,
//   day: any,
//   treatmentId: any
// ) => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         `${endpoints.availability}/date/${year}/${month}/${day}/treatment/${treatmentId}`
//       );
//       setData(result.data);
//     };
//     fetchData();
//   }, [year, month, day, treatmentId]);
//   return data;
// };
