'use client'
import { getGuestsByID } from '@/Data/GET/getGuestsByID';
import { useEffect, useState } from 'react';

const useFetchGuestsByIDData = (id: number) => {
  const [guestsData, setGuestsData] = useState([]);

  useEffect(() => {
    (async function () {
        const fd: any = await getGuestsByID(id);
        setGuestsData(fd)
        console.log(guestsData);
      })();
  }, []);

  return { guestsData };
};

export default useFetchGuestsByIDData;
