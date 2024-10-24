import dbConnect from '@/lib/db';
import ImageModel from '@/models/ImageModel';

export async function POST(req) {
  const res = new Response(); // Create a new Response object

  try {
    await dbConnect(); // Attempt to connect to the database
    const {title,description,url,isContributed,contributedBy} = await req.json()
    const data =  new ImageModel({title,description,url})
    await data.save()
    return new Response(JSON.stringify({ message: 'Saved in db successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Saving in db failed!', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
