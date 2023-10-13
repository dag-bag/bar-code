import Barcode from "react-barcode";
export default function Id({ id }: any) {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Barcode value={id} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}
