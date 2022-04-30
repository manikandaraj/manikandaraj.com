import React from "react"
import Layout from "../components/layout"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "@material-ui/core";

export default function Home() {
  return ( 
    <Layout>
      <div>
      <Toolbar />
        <Typography paragraph>
          Hi there! I'm Manikandaraj Srinivasan<br></br>
          I'm a Software Engineer by choice, passion and Profession.<br></br>
        </Typography>
      </div> 
    </Layout>
  )
}
