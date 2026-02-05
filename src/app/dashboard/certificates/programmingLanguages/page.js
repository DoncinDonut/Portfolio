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


export default function ProgrammingLanguagesPage() {
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
      Languages
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
                component="a"
                href="https://www.kaggle.com/learn/certification/cndonnelly/python"
                target="_blank"
                rel="noopener noreferrer"
              sx={{
                p: 3,
                display: 'flex',
                backgroundColor: '#0F172A',
                border: '1px solid #1F2937',
                borderRadius: 3,
                maxWidth: 900,
                mx: 'auto',
                mt: 3,
                '&:hover': {
                  borderColor: '#38BDF8'
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' }
                }}
              >
                {/* LEFT — IMAGE */}
                <Box sx={{ flex: 1 }}>
                  <Box
                    component="img"
                    src="/images/certificates/languages/Python.png"
                    alt="PHP Level 1 Certificate"
                    sx={{
                      display: 'block',
                      mx: { xs: 'auto'},
                      p: 2,
                      mb: 2,
                      width: '70%',
                      borderRadius: 2,
                      border: '2px solid #334155'
                    }}
                  />
                </Box>

                {/* RIGHT — TEXT */}
                <Box sx={{ flex: 2 }}>
                  <Typography variant="h5" sx={{ color: '#E5E7EB', mb: 1 }}>
                    Fundamentals of Python Certificate
                  </Typography>

                  <Typography sx={{ color: '#CBD5F5', lineHeight: 1.6 }}>
                    I obtained the fundamentals of Python certificate, demonstrating a solid
                    foundation in practical exercises covering core Python syntax, control flow, and data structures.
                  </Typography>
                </Box>
              </Box>
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
