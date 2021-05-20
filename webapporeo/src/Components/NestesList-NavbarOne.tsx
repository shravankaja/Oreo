import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

export { }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

interface propType {
  clickEvent: any
}

export default function NestedList(props: propType) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [openA, setOpenA] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [openUI, setOpenUI] = React.useState(false);
  const [openF, setOpenF] = React.useState(false);
  const [openT, setOpenT] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickF = () => {
    setOpenF(!openF);
  };

  const handleClickC = () => {
    setOpenC(!openC);
  };

  const handleClickT = () => {
    setOpenT(!openT);
  };

  const handleClickD = () => {
    setOpenD(!openD);
  };

  const handleClickUI = () => {
    setOpenUI(!openUI);
  };


  const handleClickA = () => {
    setOpenA(!openA);
  };

  const handleClickE = () => {
    setOpenE(!openE);
  };

  const handleProductListEvent = () => {
    console.log(true)
    props.clickEvent("truepl")
  };

  const handleProduct = () => {
    props.clickEvent("truep")
  };

  const handleDashboard = () => {
    props.clickEvent("trueD")
  }

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Main
        </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={handleClickD}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openD ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Main" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="RTL" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Horizontal" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Ecommerce" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>

          </List>
        </Collapse>

        <ListItem button onClick={handleClickA}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="App" />
          {openA ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openA} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Calender" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="File Manager" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Contact list" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Collapse>



        <ListItem button onClick={handleClickE}>
           <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Ecommerce" />
          {openE ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openE} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" onClick = {handleDashboard}  />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Product" onClick={handleProduct} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Product List" onClick={handleProductListEvent} />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Product detail" />
            </ListItem>

          </List>
        </Collapse>




        <ListItem button onClick={handleClickUI}>
          <ListItemIcon>
            <ViewQuiltIcon />
          </ListItemIcon>
          <ListItemText primary="User Interface" />
          {openUI ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUI} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="UI Kit" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Alerts" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Collapse" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Colors" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Dialogs" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Icons" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="List Groups" />
            </ListItem>
          </List>
        </Collapse>
      </List>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            FORM,CHARTS,TABLES
        </ListSubheader>
        }
        className={classes.root}
      >


        <ListItem button onClick={handleClickF}>
          <ListItemIcon>
            <ListAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
          {openF ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openF} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Bsic Elements" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Advance Elements" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Examples" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Validation" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Layout" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Design" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Contianer" />
            </ListItem>
          </List>
        </Collapse>


        <ListItem button onClick={handleClickT}>
          <ListItemIcon>
            <TableChartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
          {openT ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openT} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Bsic Elements" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Advance Elements" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Examples" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Validation" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Layout" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Design" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Contianer" />
            </ListItem>
          </List>
        </Collapse>



        <ListItem button onClick={handleClickC}>
          <ListItemIcon>
            <AssessmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
          {openC ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openC} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Bsic Elements" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Advance Elements" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Examples" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Validation" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Layout" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Design" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Form Contianer" />
            </ListItem>
          </List>
        </Collapse>











      </List>


    </>
  );
}
