import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SvgIcon from "@material-ui/core/SvgIcon";
import StackOverFlowIcon from '../../static/icons/logo-stackoverflow.png';
import { Icon } from "@material-ui/core";
import { Helmet } from "react-helmet";


const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    treeView: {
      height: 240,
      flexGrow: 1,
      maxWidth: 400,
    },
  }),
);

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <meta charset="utf-8" />
        <meta property="og:title" content="Manikandaraj Srinivasan" />
        <meta property="og:description" content="My Blog - Manikandaraj Srinivasan!" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="" />
        <title>Manikandaraj Srinivasan</title>
      </Helmet>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Avatar>M</Avatar>
            <Typography variant="h6" noWrap>
              Manikandaraj Srinivasan
            </Typography>
          </Box>
          <Box display='flex' al>
            {/* <Typography variant="h6" noWrap>
              Semper Elit
            </Typography> */}
          </Box>
          {/* <Typography variant="h6" noWrap> LinkedIn </Typography>
          <Typography variant="h6" noWrap> GitHub </Typography>
          <Typography variant="h6" noWrap> Twitter </Typography>
          <Typography variant="h6" noWrap> Stackoverflow </Typography> */}
          <Link href="https://www.linkedin.com/in/manikandaraj/" target="_blank" rel="noopener" underline="none" color="inherit">
            <LinkedInIcon style={{height: 48, width: 48}} />
          </Link>
          <Link href="https://github.com/manikandaraj" target="_blank" rel="noopener" underline="none" color="inherit">
            <GitHubIcon style={{height: 48, width: 48}} />
          </Link>
          <Link href="https://twitter.com/manikandaraj" target="_blank" rel="noopener" underline="none" color="inherit">
            <TwitterIcon style={{height: 48, width: 48}} />
          </Link>
          <Link href="https://stackoverflow.com/users/1430572/manikandaraj-srinivasan" target="_blank" rel="noopener" underline="none" color="inherit">
            <img src={StackOverFlowIcon} style={{height:48, width:48}} />
            {/* <SvgIcon component={StackOverFlowIcon} inheritViewBox /> */}
          </Link>
        </Toolbar>
      </AppBar>

      {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component="a" href="/home">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <TreeView className={classes.treeView}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="2021">
              <TreeItem nodeId="2" label="Jan" ></TreeItem>
            </TreeItem>
            <TreeItem nodeId="3" label="Topics">
              <TreeItem label="C++" >
              </TreeItem>
              <TreeItem label="Java" >
              </TreeItem>
              <TreeItem label="Python" >
              </TreeItem>
              <TreeItem nodeId="6" label="Material-UI">
                  <TreeItem nodeId="7" label="src">
                    <TreeItem nodeId="8" label="index.js" />
                    <TreeItem nodeId="9" label="tree-view.js" />
                  </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer> */}
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}