'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

export default function DashboardPage() {
  const router = useRouter();

  const About = [
    { name: 'Tech Stack', image: '/images/techstack.png', path: '/dashboard/techstack/' },
    { name: 'Education', image: '/images/Education.png', path: '/dashboard/education/' },
    { name: 'Experience', image: '/images/Experience.png', path: '/dashboard/experience/' },
    { name: 'Interests', image: '/images/Interests.png', path: '/dashboard/interests/' },
  ];

  const Projects = [
    { name: 'Featured', image: '/images/Featured.png', path: '/projects/project-one/' },
    { name: 'Personal', image: '/images/Curiosity.png', path: '/projects/project-two/' },
    { name: 'AI', image: '/images/AI.png', path: '/projects/project-three/' },
    { name: 'Small', image: '/images/Small.png', path: '/projects/project-four/' },
  ];

  const [items, setItems] = React.useState(About);

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(1200px circle at top, #0F172A 0%, #020617 60%)',
          py: 6
        }}
      >
        {/* INTRO */}
        <Container maxWidth="md" sx={{ mb: 6 }}>
          <Typography variant="h3" fontWeight={700} color="#E5E7EB" mb={2}>
            Cian Donnelly
          </Typography>

          <Typography color="#9CA3AF">
            I am currently a 3rd year student studying Informatics and Computing at
            Technological University Dublin.
          </Typography>
        </Container>

        {/* BUTTONS */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{   mt: { xs: 2, md: 20 }, mb: 6,}}>
          <Button variant="contained" onClick={() => setItems(About)} sx={{ px: { xs: 4, md: 18 } }}>
            About
          </Button>
          <Button variant="contained" onClick={() => setItems(Projects)} sx={{ px: { xs: 4, md: 18 } }}>
            Projects
          </Button>
        </Stack>

        <Container maxWidth="md">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 4,
            }}
          >
            {items.map((item, index) => (
              <Paper
                key={index}
                onClick={() => router.push(item.path)}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: '#0F172A',
                  border: '1px solid #1F2937',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: 120,
                    objectFit: 'contain',
                    marginBottom: 1,
                  }}
                />

                <Typography color="#E5E7EB" fontWeight={600}>
                  {item.name}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
