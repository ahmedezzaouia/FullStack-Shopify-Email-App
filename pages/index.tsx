import type { NextPage } from 'next'
import {useState,useCallback} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Page,Card,RangeSlider } from '@shopify/polaris'

const Home: NextPage = () => {
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value : any) => setRangeValue(value),
    [],
  );

  return (
    <Page>
      <Card sectioned title="Background color">
      <RangeSlider
        label="Opacity percentage"
        value={rangeValue}
        onChange={handleRangeSliderChange}
        output
      />
    </Card>
    </Page>
  )
}

export default Home
