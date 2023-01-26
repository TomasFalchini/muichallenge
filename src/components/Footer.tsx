import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Logo from "./Logo";
import SelectSmall from "./Select";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const SocialMediaButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#535C67",
  borderRadius: "50%",
  height: 32,
  width: 32,
}));

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary",
        p: "90px",
        paddingBottom: "0",
        bottom: "0",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Logo />
          <Typography
            fontSize={15}
            lineHeight={"24px"}
            fontWeight={400}
            sx={{ maxWidth: 264 }}
          >
            We sell custom products for all your needs. Packs and bulk products
            that you will enjoy.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon />
            <Typography fontSize={15} lineHeight={"16px"} fontWeight={600}>
              +1-202-555-0129
            </Typography>
          </Box>
          <Box
            sx={{
              width: 192,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SocialMediaButton>
              <FacebookIcon
                sx={{
                  "&:hover": {
                    color: "#535C67",
                  },
                }}
                color="primary"
              />
            </SocialMediaButton>
            <SocialMediaButton>
              <TwitterIcon
                sx={{
                  "&:hover": {
                    color: "#535C67",
                  },
                }}
                color="primary"
              />
            </SocialMediaButton>
            <SocialMediaButton>
              <InstagramIcon
                sx={{
                  "&:hover": {
                    color: "#535C67",
                  },
                }}
                color="primary"
              />
            </SocialMediaButton>
            <SocialMediaButton>
              <LinkedInIcon
                sx={{
                  "&:hover": {
                    color: "#535C67",
                  },
                }}
                color="primary"
              />
            </SocialMediaButton>
            <SocialMediaButton>
              <YouTubeIcon
                sx={{
                  "&:hover": {
                    color: "#535C67",
                  },
                }}
                color="primary"
              />
            </SocialMediaButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "24px",
            padding: "20px",
          }}
        >
          <Typography fontSize={16} fontWeight={700}>
            Our company
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            About us
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            FAQ
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Partnerships
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Sustainability
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Blog
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "24px",
            padding: "20px",
          }}
        >
          <Typography fontSize={16} fontWeight={700}>
            How can we help
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Place a ticket
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Track your order
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Help center
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "24px",
            padding: "20px",
          }}
        >
          <Typography fontSize={16} fontWeight={700}>
            Information
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Contact us
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Live chat
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Privacy
          </Typography>
          <Typography fontSize={15} fontWeight={400}>
            Terms of use
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "110px",
          heigth: 123,
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "72px",
        }}
      >
        <Typography gutterBottom>
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 362,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={14} sx={{ height: 16 }} gutterBottom>
              Region:
            </Typography>
            <SelectSmall
              defValue="United States"
              options={["Argentina", "Brasil", "Canada", "Colombia"]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={14} sx={{ height: 16 }} gutterBottom>
              Language:
            </Typography>
            <SelectSmall
              defValue="English"
              options={["Spanish", "Portuguese", "Italian", "Japanese"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
