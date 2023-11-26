import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Container,
  Box,
} from "@mantine/core";
import classes from "./ProductDetail.module.css";
import useProductDetail from "./hooks/useProductDetail";

export default function ProductList() {
  const { product, loading } = useProductDetail();
  if (loading) {
    return (
      <Container py="xl">
        <Text>Loading...</Text>
      </Container>
    );
  }
  return (
    <Container py="xl">
      <Box mb={30}>
        <Link to={"/products"}>
          <Button variant="outline">Kembali</Button>
        </Link>
      </Box>
      <Card key={product.id} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image
            src={product.images?.[0]}
            alt="Tesla Model S"
            w={"100%"}
            fit="contain"
          />
        </Card.Section>
        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{product.title}</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>
        <Box>
          <Text>{product.description}</Text>
        </Box>
        <Card.Section className={classes.section}>
          <Group gap={30} justify="space-between" px={20}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                {product.price}
              </Text>
            </div>
            <Link to={`/products/${product.id}`}>
              <Button radius="xl" style={{ flex: 1 }}>
                Beli Sekarang
              </Button>
            </Link>
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
