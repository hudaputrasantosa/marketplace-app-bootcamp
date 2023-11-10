import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const network = axios.create({
  baseURL: "https://dummyjson.com/",
});
export default function useProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await network.get(`/products/${id}`);
      setProduct(response?.data);
      setLoading(false);
    } catch (error) {
      console.log("error > ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  return {
    product,
    loading,
  };
}
