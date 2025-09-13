import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const Projects = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Projetos Pessoais</h2>
      <Row className="g-4">
        {/* Projeto Pokémon Crystal */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Bot de Pokémon Crystal</Card.Title>
              <div className="mb-3">
                <Button
                  variant="dark"
                  size="sm"
                  href="https://github.com/allanzinhodev/pokeAI"
                  className="me-2"
                >
                  GitHub
                </Button>
                <Button variant="secondary" size="sm" href="https://www.twitch.tv/allaorodrigues">
                  Twitch
                </Button>
              </div>
              <Card.Text>
                Nesse projeto foi importantíssimo o estudo de como funciona uma
                ROM e como ela é emulada, como são organizados seus offsets de
                memória e instruções assembly de arquitetura ARM.
              </Card.Text>
              <div className="mb-2">
                <Badge bg="primary" className="me-1">Lua</Badge>
                <Badge bg="info" text="dark" className="me-1">Twitch</Badge>
                <Badge bg="secondary" className="me-1">Arquitetura ARM</Badge>
                <Badge bg="dark" className="me-1">Assembly</Badge>
                <Badge bg="success">Leitura de Offsets</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Projeto Pokémon FireRed */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Bot de Pokémon FireRed</Card.Title>
              <div className="mb-3">
                <Button variant="dark" size="sm" href="https://github.com/allanzinhodev/fireredBOT">
                  GitHub
                </Button>
              </div>
              <Card.Text>
                Bot automatizado criado com Puppeteer para interagir com jogos de
                navegador no estilo Pokémon.
                <br />
                Automatiza batalhas, captura de pokémons e gerenciamento de
                inventário; utiliza scripts assíncronos para emular cliques,
                teclas e navegação.
              </Card.Text>
              <Card.Text>
                Projeto voltado para estudo de automação e interações na Twitch
                usando comandos no chat, com foco em controle de fluxo,
                tratamento de exceções e simulação de comportamento humano.
              </Card.Text>
              <div className="mb-2">
                <Badge bg="warning" text="dark" className="me-1">Puppeteer</Badge>
                <Badge bg="info" text="dark" className="me-1">Twitch</Badge>
                <Badge bg="success" className="me-1">Automação</Badge>
                <Badge bg="dark">Visão Computacional (OpenCV)</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Projeto CJI Rank */}
        <Col md={12}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>CJI Rank</Card.Title>
              <div className="mb-3">
                <Button
                  variant="dark"
                  size="sm"
                  href="https://cjirank.vercel.app/"
                  className="me-2"
                >
                  GitHub
                </Button>
                <Button variant="success" size="sm" href="#">
                  Em Produção
                </Button>
              </div>
              <Card.Text>
                Aplicação web desenvolvida para listar e exibir dados de
                lutadores do evento Craig Jones Invitational. O projeto consome
                uma API RESTful que gerencia informações de lutadores, lutas e
                estatísticas.
              </Card.Text>
              <Card.Text>
                Front-end em React com React Bootstrap, focado em layout
                responsivo e navegação fluida;
                <br />
                Back-end em Node.js com Express e banco de dados PostgreSQL;
                <br />
                Deploy do front-end na Vercel e API na Railway.
              </Card.Text>
              <div className="mb-2">
                <Badge bg="primary" className="me-1">React</Badge>
                <Badge bg="dark" className="me-1">Node.js</Badge>
                <Badge bg="info" text="dark" className="me-1">PostgreSQL</Badge>
                <Badge bg="secondary" className="me-1">API REST</Badge>
                <Badge bg="warning" text="dark">Puppeteer</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
