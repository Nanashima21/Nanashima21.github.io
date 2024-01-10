import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { worksData } from "../../data/works";
import { ImGithub } from "react-icons/im";
import { HiMiniLink } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { TbAppWindow } from "react-icons/tb";
import { RiMovieLine } from "react-icons/ri";
import "./WorksGrid.css";

const Works = () => {
  return (
    <Box sx={{ pl: "10%", pr: "10%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {worksData.map((about, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ minHeight: 400, border: 1 }}>
                <CardMedia sx={{ height: 150 }} image={about.image} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <h5 style={{ margin: "5px" }}>{about.title}</h5>
                  </Typography>
                  <div className="box">
                    {about.stacks.map((stack, idx) => {
                      return idx === 0 ? <p>{stack}</p> : <p>, {stack}</p>;
                    })}
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {about.text}
                  </Typography>
                </CardContent>
                <div className="box">
                  {about.links.map((link, _) => {
                    return <>{linkIcon(link)}</>;
                  })}
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Works;

const linkIcon = (link: Array<String>) => {
  switch (link[0]) {
    case "github":
      return (
        <a className="icon" href={"https://github.com/Nanashima21/" + link[1]}>
          <ImGithub size="30px" />
        </a>
      );
    case "drive":
      return (
        <a className="icon" href={String(link[1])}>
          <HiMiniLink size="30px" />
        </a>
      );
    case "app":
      return (
        <a className="icon" href={"https://nanashima21.github.io/" + link[1]}>
          <TbAppWindow size="30px" />
        </a>
      );
    case "website":
      return (
        <a className="icon" href={String(link[1])}>
          <CgWebsite size="30px" />
        </a>
      );
    case "movie":
      return (
        <a className="icon" href={String(link[1])}>
          <RiMovieLine size="30px" />
        </a>
      );
    default:
      return <></>;
  }
};
