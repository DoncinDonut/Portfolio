'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';


export default function InterestsPage() {
  const router = useRouter();

  return (
    <>
      <CssBaseline />

{/* ================= TOP NAV BAR ================= */}
<Box
  sx={{
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#0F172A',
    borderBottom: '1px solid #1F2937',
  }}
>
  <Container
    maxWidth="xl"
    disableGutters
    sx={{
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: { xs: 0, md: 0}

    }}
  >
    {/* LEFT */}
    <IconButton
      onClick={() => router.back()}
      sx={{ color: '#E5E7EB' }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>

    {/* CENTER */}
    <Typography
      sx={{
        position: 'absolute', // keeps title centered
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 700,
        fontSize: '1.75rem',
        color: '#E5E7EB',
        pointerEvents: 'none', // avoids blocking clicks
      }}
    >
      Interests
    </Typography>

    {/* RIGHT — DESKTOP ONLY */}
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: 1,
      }}
    >
      <IconButton
        component="a"
        href="https://github.com/DoncinDonut"
        target="_blank"
        sx={{ color: '#E5E7EB' }}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/cian-donnelly-/"
        target="_blank"
        sx={{ color: '#E5E7EB' }}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="mailto:ciandonnelly15@outlook.com"
        sx={{ color: '#E5E7EB' }}
      >
        <EmailIcon />
      </IconButton>

      <IconButton
        component="a"
        href="/Cian_Donnelly_CV.pdf"
        target="_blank"
        sx={{ color: '#E5E7EB' }}
      >
        <DescriptionIcon />
      </IconButton>
    </Box>
  </Container>
</Box>



      {/* ================= PAGE CONTENT ================= */}
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(1200px circle at top, #0F172A 0%, #020617 60%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              p: 4,
              backgroundColor: '#0F172A',
              border: '1px solid #1F2937',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography color="#E5E7EB">
              Content goes here
            </Typography>
          </Paper>
        </Container>

        {/* ================= MOBILE FOOTER ================= */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            justifyContent: 'center',
            gap: 7,
            py: 1.5,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            borderTop: '1px solid #1F2937',
            zIndex: 4000,
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/DoncinDonut"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/cian-donnelly-/"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:ciandonnelly15@outlook.com"
            sx={{ color: 'white' }}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            component="a"
            href="/cv/CV.pdf"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <DescriptionIcon />
          </IconButton>
        </Box>

      </Box>
    </>
  );
}
