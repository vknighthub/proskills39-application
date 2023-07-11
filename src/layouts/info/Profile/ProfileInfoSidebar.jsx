import Link from "next/link";
import React from "react";
import avatar from '@/assets/images/avatar.png';
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import { useMe } from "@/data/user";
import { Avatar, Box, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import RatingStars from "@/utils/ratingstar";
import { Card } from "react-bootstrap";
import IconifyIcon from "@/components/icon";


const ProfileInfoSidebar = () => {

  const { t } = useTranslation('common');
  const { me } = useMe();
  const profile = me?.data

  return (
    <aside>
      <div className="user-db-menu">
        <div className="user-db-header">
          <div className="user-header-user-profile">
            <div className="avatar box-152">
              <Link href="/profile-info">
                <Image src={profile?.avatar ? profile.avatar : avatar} alt="avatar" width={80} height={80} />
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>

              </Link>{" "}
            </div>
            <div className="title">
              {profile?.fullname}
            </div>
            <div className="item-meta">
              <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                {profile?.freelancerlevel.title}
                <Image
                  style={{ marginLeft: 5 }}
                  src={profile?.freelancerlevel.icon}
                  alt={profile?.freelancerlevel.title}
                  width={32}
                  height={32}
                />
              </Stack>
            </div>
            <div className="author-meta">
              <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                <RatingStars value={profile?.rateofrating} /> ({profile?.totalreviews} reviews)
              </Stack>
            </div>
            <div className="author-meta">
              <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>{profile?.inqueueservice}</Avatar>} label="In Queue Service" color="primary" />
                <Chip avatar={<Avatar>{profile?.completeproject}</Avatar>} label="Complete Project" color="success" />
                <Chip avatar={<Avatar>{profile?.completeservice}</Avatar>} label="Complete Service" color="warning" />
              </Stack>
            </div>
            <div className="author-meta">
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <div>
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >

                          <Box sx={{
                            columnGap: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            width: '150px',
                            marginLeft: 5
                          }}
                          >
                            <Typography sx={{ color: 'white' }}>
                              <IconifyIcon icon="bx:map" color="white" />
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              From
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', ml: 5 }}>
                            <Typography sx={{ color: 'white' }}>
                              {profile?.country}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >

                          <Box sx={{
                            columnGap: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            width: '150px',
                            marginLeft: 5
                          }}
                          >
                            <Typography sx={{ color: 'white' }}>
                              <IconifyIcon icon="bi:people-circle" color="white" />
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              Member since
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', ml: 5 }}>
                            <Typography sx={{ color: 'white' }}>
                              {profile?.datecreated}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >

                          <Box sx={{
                            columnGap: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            width: '150px',
                            marginLeft: 5
                          }}
                          >
                            <Typography sx={{ color: 'white' }}>
                              <IconifyIcon icon="fluent:people-team-24-regular" color="white" />
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              Seller type
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', ml: 5 }}>
                            <Typography sx={{ color: 'white' }}>
                              {profile?.sellertype}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >

                          <Box sx={{
                            columnGap: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            width: '150px',
                            marginLeft: 5
                          }}
                          >
                            <Typography sx={{ color: 'white' }}>
                              <IconifyIcon icon="ph:clock-thin" color="white" />
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              Availability
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', ml: 5 }}>
                            <Typography sx={{ color: 'white' }}>
                              {profile?.availability}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >

                          <Box sx={{
                            columnGap: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            width: '150px',
                            marginLeft: 5
                          }}
                          >
                            <Typography sx={{ color: 'white' }}>
                              <IconifyIcon icon="clarity:language-line" color="white" />
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              Language
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', ml: 5 }}>
                            <Typography sx={{ color: 'white' }}>
                              {profile?.language}
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default ProfileInfoSidebar;
